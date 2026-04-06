# Domain Model
Teclab Library Information System

---

## 1. Domain Overview

The domain represents the operational management of an academic library, focusing on inventory control, lending workflows, and user interaction.

The system models real organizational behavior rather than technical abstractions.

---

## 2. Core Domain

The **core domain** is:

Library Lending Management

Primary responsibility:
tracking the lifecycle of books from availability to loan and return.

---

## 3. Domain Entities

### Book
Represents a physical or cataloged item.

Attributes:
- id
- title
- author
- publisher
- category
- availabilityStatus

Responsibilities:
- maintain inventory state
- participate in loans and reservations

---

### User

Represents a system actor.

Attributes:
- id
- name
- role
- registrationNumber

Roles:
- Administrator
- Librarian
- Student/Teacher

---

### Loan

Represents the borrowing transaction.

Attributes:
- loanId
- bookId
- userId
- loanDate
- returnDate
- status

Rules:
- a book cannot be loaned if unavailable
- loans generate historical records

---

### Reservation

Represents future borrowing intent.

Attributes:
- reservationId
- bookId
- userId
- reservationDate

---

### Fine

Represents penalties derived from overdue returns.

Attributes:
- fineId
- amount
- reason
- paymentStatus

---

## 4. Value Objects

Value objects describe concepts without identity.

Examples:
- DateRange
- BookStatus
- UserRole

---

## 5. Aggregates

### Loan Aggregate
Controls consistency between:
- Loan
- Book availability
- Fine calculation

Loan acts as aggregate root.

---

## 6. Bounded Contexts

| Context | Responsibility |
|--------|---------------|
| Catalog Management | book metadata |
| Lending Management | loans and returns |
| User Management | roles and access |
| Reporting | analytics and history |

---

## 7. Domain Rules

- inventory updates automatically after transactions
- historical data is immutable
- users interact through authorized roles only

---

## 8. Domain Evolution

Future expansions may include:

- digital resources
- multi-library support
- recommendation systems