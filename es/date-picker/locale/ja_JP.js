import CalendarLocale from 'rc-calendar/es/locale/ja_JP';
import TimePickerLocale from '../../time-picker/locale/ja_JP';
import assign from 'object-assign';
var locale = {
    lang: assign({
        placeholder: '日付を選択',
        rangePlaceholder: ['開始日付', '終了日付']
    }, CalendarLocale),
    timePickerLocale: assign({}, TimePickerLocale)
};
export default locale;