/**
 * web_accessible_resources
 * browser popup
 */

import flatpickr from 'flatpickr';
import { browser } from 'webextension-polyfill-ts';

import { STORAGE_KEYS, ORDERST_SEARCH_DATE } from './const/index';
import { getStorage } from './helpers/storage';

import './public/data/css/popup.scss';

// setting flatpicker
const fp: any = flatpickr('#flatpickr', {
  inline: false,
  mode: 'range',
  minDate: ORDERST_SEARCH_DATE,
  maxDate: 'today',
  dateFormat: 'm/d/Y',
  defaultDate: [
    ORDERST_SEARCH_DATE,
    'today',
  ],
});

const period = {
  start: ORDERST_SEARCH_DATE,
  end: fp.formatDate(new Date(), 'm/d/Y'),
};

const executeButton = document.getElementById('execute');
const keywordHistory = document.getElementById('keywordHistory');
const keyword = <HTMLInputElement>document.getElementById('keyword');

// popup open
(async () => {
  const tbs: Tbs = {};
  period.start = ORDERST_SEARCH_DATE;

  const history: Array<{[key:string]: string}> = await getStorage(STORAGE_KEYS.history);

  history.reverse().forEach((params, index, historyList) => {
    // generate history
    const option = document.createElement('option');
    option.label = String(index);
    option.value = params.q;

    if (keywordHistory) {
      keywordHistory.appendChild(option);
    }

    // set start date by last history
    if (index + 1 === historyList.length && params.tbs && params.tbs.length > 0) {
      params.tbs.split(',').forEach((keyValue: string) => {
        const [key, value] = keyValue.split(':');
        Object.defineProperty(tbs, key, { value });
      });
      period.start = tbs.cd_min || ORDERST_SEARCH_DATE;

      fp.setDate(Object.values(period), true, 'm/d/Y');
    }
  });
})();

// TODO: add period change event when history is selected

// press execute button
if (executeButton) {
  executeButton.onclick = (event: Event) => {
    event.preventDefault();

    const params = new URLSearchParams();

    // set keywords
    params.append('q', keyword.value);

    // set date
    const selectedDates = fp.selectedDates.sort((a: any, b: any) => (a.getTime() > b.getTime()));
    period.start = fp.formatDate(selectedDates[0], 'm/d/Y');
    period.end = fp.formatDate(selectedDates[1], 'm/d/Y');

    const tbs: Tbs = {
      cdr: '1',
      cd_min: period.start,
      cd_max: period.end,
    };

    let tbsValue = '';

    Object.entries(tbs).forEach(([k, v]) => {
      tbsValue += `${k}:${v},`;
    });
    tbsValue = tbsValue.slice(0, -1);

    params.append('tbs', tbsValue);

    // generate google search url
    const url = new URL('https://www.google.com/search');
    url.search = params.toString();

    browser.tabs.update({ url: url.href });

    window.close();
  };
}
