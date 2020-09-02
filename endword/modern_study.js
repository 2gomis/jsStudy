/*alert('hellow')
    alert('world')
alert(3+    2+    1)
alert("Nor Error !!") [1,2].forEach(alert)

let messege;                // 변수 선언
messege = 'hi hellow bye'   // 변수에 데이터 저장*/


//let messege = '123abc하이하이';                // 변수 선언
//messege = 'hi hellow bye'   // 변수에 데이터 저장

//alert(messege);             // alert으로 변수 호출

//let myBirthday = '나의 생일 : 1983.09.10';
//myBirthday = 'soon to go home';
//alert(myBirthday);
/*
const COLOR_RED = '#F00';
const COLOR_GREEN = '#0F0';
const COLOR_BLUE = '#00F';
const COLOR_ORANGE = '#FF7F00';

// 색상을 고르고 싶을 때 별칭을 사용할 수 있게 되었습니다.
let color = COLOR_ORANGE;
alert('오렌지 색의 값은?')
alert(color);

//과제 1
let admin;
let name;

name = 'John';
admin = name;

alert(admin);
//과제 2
let livePlanet = 'earth';   // ourPlanetName
let connetUserName;         // currentUserName
*/

//no error
/*
let message = 'hellow';
message = 12345;

alert(message);

//8월 26일, 공부 예정 - 123123
alert(1/0);
alert(Infinity);
alert("숫자가 아님"/2);
alert("숫자 아님"/2+5);

// # BigInt
const bigInt1 = 123123123123123123123123;  //1.2312312312312312e+23
const bigInt2 = 123123123123123123123123n; //123123123123123123123123

alert(bigInt1);
alert(bigInt2);


// # 문자형1
let str = 'hello';
let str2 = "Single quotes are ok too"
let phrase = `can embed another ${str}`

alert(str);
alert(str2)
alert(phrase)


// # 문자형2
let name = "John"

alert(`Hello, ${name}~~`)
alert(`the result is ${1 + 2}`);
alert("역 따옴표가 아닌 큰&작은 따음표는 ${} 사용 불가")


// # 불린형
// true : 긍정, false : 부정
let nameFieldChecked = true;    //네, name field 가 확인되었습니다 (check)
let ageFieldchecked = false;    //아니오 age field를 확인하지 않았습니다 (non check)

let isGreater = 4 > 1;
alert(isGreater);


let name = 'Ilya';

alert(`hello, ${'name'}`);
alert(`hello, ${name}`);
alert(`hello, ${1}`);
*/

// # 9월 1일 공부
/*
// >> 입력필드 대화상자
// result = prompt(title, [default]);


// title : 사용자에게 보여줄 문구
// default : 입력 필드의 초기값 (선택)
// [...] : 선택값이라는 의미



let age = prompt('나이를 입력하세요.','ex) 100');   // default 위치의 값
alert(`당신의 나이는 ${age}입니다.`);               // ㄴ 이 ${age} 위치에 표시



// 크롬 제외 ie를 포함한 브라우저에서의 prompt
let ie = prompt('test');        // 입력 필드에 undefined
let ie2 = prompt('test','');    // 입력 필드에 공백


// >> 컨펌 대화상자
//  result = confirm(question);
//  질문, [확인] / [취소] 버튼이 있는 modal window
//  [확인] 선택 시, true  / [취소] 선택 시, false 반환

let isBoss = confirm('당신이 주인입니까?');
alert(isBoss);


// 과제 : 사용자에게 이름을 물어보고, 
//       입력받은 이름을 그대로 출력하는 페이지

let name = prompt('당신의 이름을 입력하세요.','여기에 입력');
alert(`당신이 입력한 이름은 "${name}" 입니다`);

let confirmName = confirm(`입력한 "${name}"가 올바른 이름인가요?`);
alert(confirmName);
*/

// ----------------------------------------
//        형 변환 (type convirsion)
// ----------------------------------------
//  >> 문자형(string)으로 변환
let value = true;           // value에 boolean - true 저장
alert(typeof value);        // value에 저장된 값의 형

// typeof == 형식의 정보를 얻을 수 있는 연산자

value = String(value);      // 'true' 텍스트 저장
alert(typeof value);        // 'true' 의 형 = 