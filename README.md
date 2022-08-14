## 시반컴퍼니 메인 웹사이트

SbianCompany의 메인 웹사이트 개발 목적 레포지토리입니다.

아래 링크에서 실제 배포 및 운영 중에 있으며, [백엔드 레포지토리](https://github.com/sangwoong03/siban-compnay-django) 개발 예정에 있습니다.


### 1. 웹 사이트 주소 : https://siban-company.netlify.app

<br>

### 2. 프론트엔드 스택

- React.js
- Styled-componenets

<br>

### 3. 백엔드 스택 (예정)

- Python(Django) - Public
- Javascript(Node) - Admin
- MySQL (Database)
- AWS (To deploy API server)

<br>

### 4. 기능

1. 메인 페이지

- 배우, 공연 정보 슬라이드 기능
- iframe 태그를 통해 유튜브 영상 송출
- 카카오 맵 API를 통해 사무실 위치 구현 (길찾기, 지도는 네이버 지도로 이동)

2. 네비게이션 바

- 로고 클릭 시 메인페이지 이동
- 인스타그램, 유튜브 외부 url 이동
- router를 통한 컴포넌트 이동

3. 게시판 기능 구현 예정

- 간편 로그인 기능을 통해 회원 별 게시글 구분
- python(django)를 활용한 백엔드 서버 구축
- MySQL 데이터베이스 구축 및 AWS 연동
- S3를 활용하여 게시글 이미지 첨부

<br>

### 5. 수정사항

1. 컴포넌트 분리 및 리팩토링

2. 데이터베이스 모델링

- 목(Mock) 데이터 → DB 이전
