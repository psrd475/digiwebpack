﻿/* http://keith-wood.name/calendars.html
   Algerian (and Tunisian) Arabic localisation for calendars datepicker for jQuery.
   Mohamed Cherif BOUCHELAGHEM -- cherifbouchelaghem@yahoo.fr */
(function($) {
	$.calendarsPicker.regionalOptions['ar-DZ'] = {
		renderer: $.calendarsPicker.defaultRenderer,
		prevText: "<i class='fas fa-angle-right'></i>", prevStatus: 'عرض الشهر السابق',
		prevJumpText: '&#x3c;&#x3c;', prevJumpStatus: '',
		nextText: "<i class='fas fa-angle-left'></i>", nextStatus: 'عرض الشهر القادم',
		nextJumpText: '&#x3e;&#x3e;', nextJumpStatus: '',
		currentText: 'اليوم', currentStatus: 'عرض الشهر الحالي',
		todayText: 'اليوم', todayStatus: 'عرض الشهر الحالي',
		clearText: 'مسح', clearStatus: 'امسح التاريخ الحالي',
		closeText: 'إغلاق', closeStatus: 'إغلاق بدون حفظ',
		yearStatus: 'عرض سنة آخرى', monthStatus: 'عرض شهر آخر',
		weekText: 'أسبوع', weekStatus: 'أسبوع السنة',
		dayStatus: 'اختر D, M d', defaultStatus: 'اختر يوم',
		isRTL: true
	};
	$.calendarsPicker.setDefaults($.calendarsPicker.regionalOptions['ar-DZ']);
})(jQuery);
