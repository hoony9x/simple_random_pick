# Simple Fake Random Pick (간단한 주작 랜덤뽑기)

"그저 새내기들을 골탕먹이기 위해(?) 만든 것...

### Prerequisite
  - Node.JS (최소 버전 : 4.x)
  - 최신 버전의 브라우저
  
### Installation Web Server
```sh
$ git clone https://github.com/khhan1993/Simple-Random-Pick.git
$ cd Simple-Random-Pick
$ npm install
```

### Before start
  - public/js/custom.js 를 엽니다.
  - 4, 5, 6번째 줄의 내용은 다음과 같습니다.
```js
var init1 = ['test1', 'test2', 'test3'];
var init2 = ['test4', 'test5', 'test6'];
var init3 = ['test7', 'test8', 'test9'];
```
  - 각 배열에는 랜덤뽑기에서 튀어나올 대상을 넣으시면 됩니다.
  - ~~init3의 경우는 주작용 배열로 랜덤으로 튀어나오지 않고 순서대로 튀어나오게 됩니다.~~ 언제 수정했는지 모르겠는데 얘도 랜덤으로 뽑히네요.
  
### Start 'Simple-Random-Pick' web server
  - 아래 코드를 'Simple-Random-Pick' directory 에서 입력합니다.
```sh
$ npm start
```
이후에 ```http://localhost:3000``` 으로 접속하면 됩니다.
접속 포트 변경을 원할 경우 ```npm start``` 앞에 ```PORT=[Port Number]``` 을 명시해주면 됩니다. 아래는 예시입니다.
```sh
$ PORT=12345 npm start
```

## 주의사항
  - 랜덤뽑기 진행 중에 절대로 브라우저를 새로고침(Refresh) 하시면 안됩니다.
  - ~~입력한 순서대로 뽑히는 init3의 경우 새로고침 시 처음부터 뽑히게 됩니다.~~
  
## TODO
  - 본 프로젝트는 더 이상의 업데이트가 없을 예정입니다.

## License
  - MIT License for only this project.
