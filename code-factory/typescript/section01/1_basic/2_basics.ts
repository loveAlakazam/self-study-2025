/**
 * Types
 *
 * :타입 으로 타입을 강제할 수 있다.
 * 정의한 타입외의 값으로 변경할 수 없다.
 */
let helloText: string = "Hello";

/**
 * 자바스크립트에 존재하는 7개 타입
 */
const stringVar: string = "String";
const numberVar: number = 3;
const bigIntVar: bigint = BigInt(9999999999);
const booleanVar: boolean = true;
const symbolVar: symbol = Symbol(1);
const nullVar: null = null;
const undefinedVar: undefined = undefined; // 명시적으로 입력하지 않지만, undefined도 타입이다.

/**
 * TS 에만 존재하는 타입
 */
// any: 아무타입을 저장할 수 있다.
// any를 사용하게되면, js와 다름없다.  어느타입이든 들어갈수있다.
// 적절한 요소에서만 any를 할당한다.
let anyVar: any = 100;
anyVar = true;
anyVar = "codeFactory";

// 타입이 정해진 변수에 any타입의 변수를 할당한경우에는 이상없음.
let testNumber: number = anyVar;
let testString: string = anyVar;
let testBoolean: boolean = anyVar;

// unknown: 알 수 없는 타입
// 입력은 가능하지만 다른변수에 할당할 수 없다.
let unknownType: unknown = 100;
unknownType = "codeFactory";
unknownType = true;

// let testNumber2: number = unknownType;  // 에러발생: unknown 형식은 number 형식에 할당할 수 없습니다.
let unknownType2: unknown = unknownType; // 같은 unknown타입변수에 할당은 가능.
let anyType2: any = unknownType; // unknown타입변수를 any타입변수에 할당은 가능.

// never타입 - 어떤한 값도 저장되지 않거나 반환되지 않을 때 사용하는 타입
// let neverType:never = null; // 에러: never타입에 할당할 수 없음
// 함수, 인터섹션에서 사용됨.

/**
 * 리스트 타입
 */
// string으로 구성된 리스트
const koreanGirlGroup: string[] = ["뉴진스", "레드벨벳", "아이브", "블랙핑크"];

