//코드는 위에서 아래로 , 왼쪽에서 오른쪽으로 실행됨

//click이라는 버튼을 선택했을 때, =>이벤트 를 달아줌
document.querySelector('#click').addEventListener('click', () => {
    const a = document.querySelector('#fir').value
    const b = document.querySelector('#sec').value
    const r = document.querySelector('#result')
    
    if (a) {        // a(1번째) 값이 있는가
        if (b) {    // b(2번째) 값이 있는가
            const g = a * b     
            r.textContent = g   // 둘다 있다면 a와 b를 곱해서 r에 저장한다
        } else {    // b(2번째) 값이 없으면 메세지 출력
            r.textContent = '두번째 값을 입력해주세요'
        }
    } else {        // a(1번째) 값이 없으면 메세지 출력
        r.textContent = '첫번째 값을 입력해주세요'
    }
});


