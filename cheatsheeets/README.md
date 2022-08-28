.children() - чтобы настроить таргетинг на дочерние элементы элемента
.siblings() - для целевых элементов, примыкающих к элементу
.parent()   - чтобы нацелиться на родительский элемент
.closest()  - перемещается вверх по дереву DOM от текущего элемента к целевому ближайшему элементу с заданным селектором
.next()     - чтобы настроить таргетинг на элемент непосредственно следующий за выбранным элементом
.prev()     - чтобы настроить таргетинг на элемент, непосредственно предшествующий выбранному элементу
.find()     - для таргетинга элементов-потомков с помощью некоторого селектора, т. е. класса, идентификатора, тега и т. д


.css()         - метод может изменять свойства стиля элемента
.css()         - метод может принимать сразу несколько стилей, если вы передадите ему объект JavaScript в качестве аргумента
.animate()     - метод может изменять определенные свойства стиля в течение определенного периода времени
.addClass()    - добавит CSS-класс к элементу, и тот .метод removeClass () удалит класс CSS
.toggleClass() - метод будет переключать класс на включение или выключение элемента


мгновенно скрывают или показывают элементы на веб-странице
.hide()
.show()
.toggle()

заставляют элементы исчезать или появляться в течение определенного периода времени
.fadeOut()
.fadeIn()
.fadeToggle()

заставляют элементы скользить вверх или вниз на место в течение определенного периода времени
.slideUp()
.slideDown()
.slideToggle()


.ready()   - метод ожидает, пока DOM HTML-страницы не будет готов к манипулированию
.on()      - attaches event handlers to the currently selected set of elements in the jQuery object
.hide()    - simplest way to hide an element
.show()    - simplest way to display an element
.fadeIn()  - animates the opacity of the matched elements
.fadeOut() - animates the opacity of the matched elements
.click()   - sent to an element when the mouse pointer is over the element, and the mouse button is pressed and released
.toggle()  - simply toggles the visibility of elements
