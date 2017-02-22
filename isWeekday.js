function isWeekday(weekDay){
var val = !weekDay.startsWith('S')
return val;
}
var result = isWeekday('Saturday');
console.log(result);
var result = isWeekday('Wednesday');
console.log(result);
