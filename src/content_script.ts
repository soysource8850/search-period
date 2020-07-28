/*
 * manifest.json で登録される開いているページで実行される処理
 */
const currentURL = window.location.href;

(async () => {
  console.log('test');
  console.log(currentURL);
})();
