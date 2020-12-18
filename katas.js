// Kata 1

ageInDays = (year, month, day) => `You are ${Math.floor(Math.abs((new Date().getTime()) - (new Date(year, month - 1, day).getTime())) / (1000 * 3600 * 24))} days old`;
