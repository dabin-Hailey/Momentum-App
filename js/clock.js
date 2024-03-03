const clock = document.getElementById("clock");

function getClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hour}:${minute}`;
  // clock.innerText = `${hour}:${minute}:${second}`;
}

//처음 페이지가 로드되고 setInterval에서 설정한 시간까지는 함수가 실행되지 않음.
//그때 화면에 빈 시계를 보여줄 수 없으니 페이지가 로드될 때도 getClock() 함수를 바로 실행시킨다.
getClock();

//매 초마다 시간을 가져오게 하기 위해 setInterval을 사용
setInterval(getClock, 1000);
