# Backend Developer Portfolio (Draft - English)

## 1. About Me

A 2-year experienced backend developer, currently gaining full-stack development experience with a focus on backend development at a manufacturing automation (MES) solution company. In my current role, I am responsible for collecting hardware (equipment) data, visualizing it as graphs on dashboards, and building management systems to automate processes that were previously operated manually by manufacturing professionals.

## 2. Skills

### Backend
Kotlin, Java, Spring Boot, Python, Gradle, Spring Data JPA, JavaScript, Maven

### Databases
MySQL, Oracle, PostgreSQL, MongoDB, InfluxDB

### Infrastructure & DevOps
Redis, Nginx, AWS, Ubuntu (Linux), GitHub Actions

### Frontend
React, Vanilla JS

### Languages
English (conversational), Japanese (conversational)

## 3. Experience

### Manufacturing Automation (MES) Solution Company | Aug 2023 ~ Present
- Built systems for hardware (equipment) data collection and dashboard visualization
- Developed management systems for automating manufacturing processes

## 4. Projects

### JPA Batch Parallel Processing Performance Optimization | Jan 2024 ~ Jun 2024

Analyzed and resolved performance issues where INSERT queries in large-scale KPI data aggregation batches were intermittently delayed by more than 2 seconds. Identified that InnoDB AUTO_INCREMENT lock contention and index lock conflicts in parallel processing environments were the root cause.

Designed Staggered Parallel Processing approach to optimize sequential startup with 150ms intervals between sites. This eliminated database lock contention caused by simultaneous DB access while maintaining the performance benefits of parallel processing.

Minimized transaction lock scope by dividing batch size into units of 10 and introducing 20ms delays between batches. As a result, reduced first INSERT delay time from 2197ms to 3-5ms (99% improvement) and stabilized overall batch processing time.

Improved data integrity and duplicate data processing performance by removing DELETE queries and switching to INSERT IGNORE approach.

### Flutter (Dart) based MES Frontend Development
- Experience in implementing manufacturing site systems

### Java (Spring Boot), JavaScript (Thymeleaf) Legacy System Refactoring
- Improved efficiency and maintainability of existing systems

### React + Kotlin (GraphQL) MES Manufacturing Equipment Data Visualization and Material Management Page BE + FE Implementation
- Developed equipment data visualization and material management features

### O2O Platform Backend Store Area Management and Infrastructure Monitoring Configuration (Side Project)
- Configured multi-module project structure and developed store area
- Built distributed monitoring system (OpenZipkin, OpenTelemetry, Grafana, Prometheus) and collected metrics from AWS production server and local DB server
- Implemented Circuit Breaker for Redis cache failure handling (Redis lookup -> Circuit Breaker triggered -> Local cache lookup -> DB lookup (AOP Fallback method, DB load limiting))

### Distributed Monitoring System Implementation (Current Company)
- Built distributed monitoring system using OpenZipkin, OpenTelemetry, Grafana, Prometheus
- Collected metrics from AWS production server and local Ubuntu (Linux) MySQL server (Prometheus Pull method, OpenTelemetry Push method)
- Built monitoring server on local Ubuntu server for cost savings

## 5. Education

### (Digital Convergence) Java Full-Stack Developer Training Course with AWS Cloud and Elasticsearch (2023-01-26 ~ 2023-07-11)

## 6. Etc

### Fast Campus INNER CIRCLE Mentee (Backend Developer / Sub-Leader) (2025-03-22 ~ 2025-06-25)
- Participated in a developer growth program for working professionals
- Code review and project mentee activities
- Planned O2O service for selling inventory products to support local small businesses and won Best Project Award
