import CalendarLocale from 'rc-calendar/es/locale/ko_KR';
import TimePickerLocale from '../../time-picker/locale/ko_KR';
import assign from 'object-assign';
var locale = {
    lang: assign({
        placeholder: '날짜 선택',
        rangePlaceholder: ['시작일', '종료일']
    }, CalendarLocale),
    timePickerLocale: assign({}, TimePickerLocale)
};
export default locale;