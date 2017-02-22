# Angular-test-e2e
Для запуска тестов требуется иметь установленный nodeJS и npm последней версии<br>
Установить все пакеты требующиеся в package.json командой:
<pre>npm install</pre>
Проект запускается на базе браузера Google Chrome, командой:
<pre>gulp</pre>
Данная команда обновит webdriver и запустит его, после чего protractor будет запускать по порядку все тесты

<h2>Альтернативный способ (вручную)</h2>
Иметь установленный nodeJS и npm последней версии<br />
Установить все пакеты требующиеся в package.json командой:
<pre>npm install</pre>
Инсталировать protractor:
<pre>npm install -g protractor</pre>
Обновить webdriver командой из npm:
<pre>webdriver-manager update</pre>
А так же запустить сам webdriver, который запустит сервер и protractor будет посылать запросы на него для управления локальным браузером. Сервер должен быть запущен на протяжении всех тестов. Информацию от сервера можно увидеть по адресу http://localhost:4444/wd/hub
<pre>webdriver-manager start</pre>


Запуск тестов производится командой
<pre>protractor test/config.js</pre>