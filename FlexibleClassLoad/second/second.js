function displayAgeResult(ageGroup) {
    // Create container div
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('result-container');
    
    // Create title element
    const title = document.createElement('h1');
    title.textContent = `당신의 신체 나이는 ${ageGroup} 입니다`;
    resultContainer.appendChild(title);
    
    // Create description elements
    const description1 = document.createElement('h2');
    description1.textContent = '당신의 실제 나이보다 신체 나이가 많으면 꾸준한 근력 운동으로 이를 해결할 필요가 있습니다';
    resultContainer.appendChild(description1);

    const description2 = document.createElement('h2');
    description2.textContent = '대표적으로 바닥에 누워 무릎을 살짝 든 자세에서 등을 올리거나 무릎을 배꼽 쪽으로 당기는 동작은 복근 및 척추 주변 근육 강화에 좋습니다';
    resultContainer.appendChild(description2);
    
    // Create next button
    const nextButton = document.createElement('button');
    nextButton.textContent = '다음으로';
    nextButton.classList.add('next-button');
    nextButton.onclick = () => location.href = './third.html';
    resultContainer.appendChild(nextButton);

    // Clear body content and add the result container
    document.body.innerHTML = '';
    document.body.appendChild(resultContainer);
    document.body.classList.add('result-background');
}

function age1() {
    displayAgeResult('20대');
}

function age2() {
    displayAgeResult('30대');
}

function age3() {
    displayAgeResult('40대');
}

function age4() {
    displayAgeResult('50대');
}

function age5() {
    displayAgeResult('60대');
}
