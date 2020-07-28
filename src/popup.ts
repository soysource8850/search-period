/*
 * manifest.json で登録される action (popup.html) で実行される処理
 */
import flatpickr from 'flatpickr';

import './public/data/css/popup.scss';

// 期間指定下限
const oldest = '1970-01-01 00:00:00';

// 取得期間日付選択
const fp: any = flatpickr('#flatpickr', {
  inline: false,
  mode: 'range',
  minDate: oldest,
  maxDate: 'today',
  dateFormat: 'Y-m-d',
  defaultDate: [
    oldest, // TODO: 前回日付
    'today',
  ],
});

const today: string = fp.formatDate(new Date(), 'Y-m-d');

const date = {
  from: oldest, // TODO: 前回日付
  to: today,
};

const executeButton = document.getElementById('execute');
const keywordList = document.getElementById('keywordList');
const keyword = <HTMLInputElement>document.getElementById('keyword');
// https://developer.mozilla.org/ja/docs/Web/API/HTMLInputElement
// https://qiita.com/Sekky0905/items/a88721f2af41050c93f2

// ポップアップ起動時
(async () => {
  if (!keywordList) {
    console.log('not found keyword list');
  }

  // 検索履歴読み込み
})();

// 実行ボタン押下時
if (executeButton) {
  executeButton.onclick = (event: Event) => {
    event.preventDefault();

    const selectedDates = fp.selectedDates.sort((a: any, b: any) => (a.getTime() > b.getTime()));

    // 検索対象期間指定
    date.from = fp.formatDate(selectedDates[0], 'Y-m-d');
    date.to = fp.formatDate(selectedDates[1], 'Y-m-d');

    // 検索キーワード設定
    const history = String(keyword.value);
    console.log(history);

    // 履歴に保存

    // 検索

    window.close();
  };
}
