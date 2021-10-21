# Calculator

this is small experimental to try a new way to separate the logic from the UI.

Implementing the UI component without any logic comes with a lot of benefits starting from increasing the testability of the code, increase the readability and make it easy to migrate to new UI library.

Since the logic most likely stay longer than the UI so it's better to keep it isolated and well tested.

In this repo I implemented small calculator with couple of test cases, based on this approach it's much easier to separate the logic in SDK for example to reuse it in different app within the company. or if we decided to use different UI library (ex. Vue / Svelte) so it's easy to change the UI layer and keep the logic as it's.
