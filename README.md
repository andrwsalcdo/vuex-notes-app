# vuex-notes-app

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


### Vuex Concepts and Notes 
 There are FOUR core concepts behind the Vuex system: 
 1. The State Tree: an object that contains all the application level state
 2. Getters: used access data in the store from within the Vue components
 3. Mutators: event handlers that manipulate the state
 4. Actions: functions called by Vue Components to dispatch the mutations 

 Components shouldn't/can't modify the state directly, they must call an `action` which dispatches a `mutation`. 

#### Mutations 
 Mutators always receive the state tree as the first arguement followed by any number of additional arguements, referred to as payload arguments. 
 It's convention to write Mutators in UPPERCASE to help distinguish them from plain normal functions. 
 Our mutators are stored in the `src/store.js` file. 

#### Actions 
They are functions that can be called by components to dispatch mutations. 
They recieve the `store` as the first argument followed by payload arguments. 
Actions can by 'asynchronours', however mutations MUST be synchronous. 
All actions are in the `src/actions.js` file. 

