function count() {
  // 지금 현재 날짜와 비교해야 할 날짜
  const now = new Date();
  const last = new Date("2025-01-01 00:00:00");
  //console.log(now);
  //console.log(last - now); // 밀리세컨드
  // 1초 = 밀리세컨드/1000, 60초 = 1분, 60분 = 1시간, 24시간 = 1일
  const second = Math.floor(((last - now) / 1000) % 60);
  console.log(second);

  const minute = Math.floor(((last - now) / 1000 / 60) % 60);
  console.log(minute);

  const hour = Math.floor(((last - now) / 1000 / 60 / 60) % 24);
  console.log(hour);

  const day = Math.floor((last - now) / 1000 / 60 / 60 / 24);
  console.log(day);
  clock.innerHTML = `${day}일 ${hour}시간 ${minute}분 ${String(
    second % 60
  ).padStart(2, "0")}초`;
}

count();

setInterval(count, 1000);
