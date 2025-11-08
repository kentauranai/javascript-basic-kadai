const bTn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
bTn.addEventListener('click', () => {
  // ｔｅｘｔを変更する。
  const h2 = document.getElementById('text');
  h2.textContent = 'ボタンをクリックしました';
})


