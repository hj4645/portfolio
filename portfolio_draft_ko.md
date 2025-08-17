# 백엔드 개발자 포트폴리오 (초안 - 한국어)

## 1. About Me

2년차 백엔드 개발자로, 현재 제조업 자동화(MES) 솔루션 기업에서 백엔드 개발을 중심으로 풀스택 개발 경험을 쌓고 있습니다. 현업에서는 하드웨어(설비) 데이터를 수집하여 대시보드에 그래프로 시각화하고, 제조업 종사자가 기존에 아날로그 방식으로 운영하던 부분을 자동화할 수 있도록 관리 시스템을 구축하는 업무를 수행하고 있습니다.

## 2. Skills

### Backend
Kotlin, Java, Spring Boot, Python, Gradle, Spring Data JPA, JavaScript, Maven

### Databases
- RDB: MySQL, Oracle, PostgreSQL, MariaDB
- NoSQL: MongoDB, InfluxDB

### Infrastructure & DevOps
Redis, Nginx, AWS, Ubuntu (Linux), GitHub Actions

### Frontend
React, Vanilla JS

### Languages
영어 (간단한 회화), 일본어 (간단한 회화)

## 3. Experience

### 제조업 자동화(MES) 솔루션 기업 (2023.08 ~ 현재)
- 하드웨어(설비) 데이터 수집 및 대시보드 시각화 시스템 구축
- 제조업 공정 자동화를 위한 관리 시스템 개발

## 4. Projects

### Flutter(Dart) 기반 MES 프론트엔드 개발
- 제조업 현장 시스템 구현 경험

### Java(Spring Boot), JavaScript(Thymeleaf) 레거시 시스템 리팩토링
- 기존 시스템의 효율성 및 유지보수성 개선

### React + Kotlin(GraphQL) MES 제조업 설비 데이터 시각화 및 자재 관리 페이지 BE + FE 구현
- 설비 데이터 시각화 및 자재 관리 기능 개발

### O2O 플랫폼 백엔드 매장 영역 담당 및 인프라 영역 모니터링 구성 (사이드 프로젝트)
- 멀티모듈 프로젝트 구조 구성 및 매장 영역 개발
- 분산 모니터링 시스템 구축 (OpenZipkin, OpenTelemetry, Grafana, Prometheus) 및 AWS 운영 서버와 로컬 DB 서버 메트릭 수집
- Redis 캐시 장애 대응을 위한 Circuit Breaker 구현 (Redis 조회 -> Circuit Breaker 발동 -> 로컬 캐시 조회 -> DB 조회 (AOP Fallback 메서드, DB 부하 제한))

### 분산 모니터링 시스템 구축 (현재 회사)
- OpenZipkin, OpenTelemetry, Grafana, Prometheus를 활용한 분산 모니터링 시스템 구축
- AWS 운영 서버 및 로컬 Ubuntu (Linux) MySQL 서버 메트릭 수집 (Prometheus Pull 방식, OpenTelemetry Push 방식)
- 비용 절감을 위해 로컬 Ubuntu 서버에 모니터링 서버 구축

### JPA 배치 병렬처리 성능 최적화
- 대용량 KPI 데이터 집계 배치에서 INSERT 쿼리가 간헐적으로 2초 이상 지연되는 성능 문제를 분석하고 해결하였습니다. 병렬처리 환경에서 발생하는 InnoDB AUTO_INCREMENT 락 경합과 인덱스 락 충돌이 원인임을 파악하였습니다.
- 시간차 병렬처리(Staggered Parallel Processing) 방식을 설계하여 지부별로 150ms 간격으로 순차 시작하도록 최적화하였습니다. 이를 통해 동시 DB 접근으로 인한 락 경합을 제거하면서도 병렬 처리의 성능 이점을 유지할 수 있었습니다.
- 배치 크기를 10개 단위로 분할하고 배치 간 20ms 지연을 도입하여 트랜잭션 락 범위를 최소화하였습니다. 그 결과 첫 번째 INSERT 지연 시간을 2197ms에서 3-5ms로 99% 단축시키고, 전체 배치 처리 시간을 안정화하였습니다.
- DELETE 쿼리를 제거하고 INSERT IGNORE 방식으로 전환하여 데이터 무결성을 보장하면서도 중복 데이터 처리 성능을 개선하였습니다.

## 5. Education

### (디지털컨버전스)AWS 클라우드와 Elasticsearch를 활용한 Java(자바) Full-Stack 개발자 양성과정 (2023-01-26 ~ 2023-07-11)

## 6. Etc

### 패스트캠퍼스 INNER CIRCLE 멘티 (BackEnd Developer / Sub-Leader) (2025-03-22 ~ 2025-06-25)
- 재직자 대상 개발자 성장 프로그램 참여
- [지역 소상공인 상생을 위한 재고 상품 판매 O2O 서비스](https://github.com/InnerCircle-ICD3/o2o-BE/wiki) 기획 및 개발
- 최우수 프로젝트상 수상