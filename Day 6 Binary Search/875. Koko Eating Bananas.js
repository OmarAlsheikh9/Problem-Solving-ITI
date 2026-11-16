function minEatingSpeed(piles, h) {
  let lo = 1;
  let hi = Math.max(...piles);

  while (lo <= hi) {
    const mid = Math.trunc((lo + hi) / 2);
    const hours = getHour(mid, piles);
    if (hours <= h) hi = mid - 1;
    else lo = mid + 1;
  }

  return lo;
}

function getHour(speed, piles) {
  let hour = 0;
  for (let i = 0; i < piles.length; i++) {
    let cur = piles[i];
    hour += Math.ceil(cur / speed);
  }
  return hour;
}
