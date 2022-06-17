## SibanCompany resoponsive app renewal

---

[web site link](http://siban-company.netlify.app)

<br>

1. Layout ()

- html (meta tag)
- src images, fonts, whole layout ... from orginal version
- Layout
  - header (logo, nav, link)
  - nav (including main & board)
    - board for communication with users
    - using Django & MySQL for board router pages
      - after `wecode back-end session` I added this function.. until that time I have to learn about Python
  - main
    - poster
    - artists
    - acts
    - map (Naver or Google api)
  - footer (logo / social media link / information of company)

2. Styled-components (zb 인강 복습)

- style 초기화
- MediaQuery 추가 (22. 06. 06~)

```
  npm i styled-reset
```

3. 상태 관리 (차후 변경)

- react-rotuer-dom

4. 데이터베이스

- MySQL 사용
- 게시판 게시글/유저 정보 사용
- Django 프레임워크 사용

5. 배포 사이트 (AWS로 변경 예정)

- [netlify](https://www.netlify.com/)
- 배포 파일 / 명령어

```
npm run build
```
