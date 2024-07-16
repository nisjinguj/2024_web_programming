document.addEventListener('DOMContentLoaded', function() {
    // 로컬 스토리지에서 데이터 가져오기
    const ageGroup = localStorage.getItem('ageGroup');
    // 데이터가 존재하면 페이지에 출력
    if (ageGroup) {
        document.getElementById('ageResult').textContent = `당신의 근육 나이는 ${ageGroup}입니다.`;
    } else {
        document.getElementById('ageResult').textContent = '근육 나이를 측정하지 않았습니다.';
    }
});