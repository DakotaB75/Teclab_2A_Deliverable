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
Represents a cataloged library item whose availability and lifecycle are managed by lending operations.

Attributes:
- id
- title
- author
- publisher
- category
- availabilityStatus

Responsibilities:
- Encapsulate inventory state and metadata.
- Act as the subject of lending transactions and reservation queues.
---

### User

Represents an authorized system actor with specific permissions and responsibilities.

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

Represents the formal contractual transaction between the library and a user for the temporary possession of an asset.

Attributes:
- loanId
- bookId
- userId
- loanDate
- returnDate
- status

Rules:
- Asset availability is a prerequisite for loan initiation.
- Loans serve as the primary source for historical activity records.

---

### Reservation

Represents a formal intent for future borrowing, securing an asset's availability for a specific user.

Attributes:
- reservationId
- bookId
- userId
- reservationDate

---

### Fine

Represents financial or administrative penalties triggered by breaches in lending terms, such as overdue returns.

Attributes:
- fineId
- amount
- reason
- paymentStatus

---

## 4. Value Objects

Value Objects are descriptive elements of the domain that are defined by their attributes rather than a persistent identity.

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
The system is divided into logical boundaries where terms and rules remain consistent to reduce conceptual complexity.

| Context | Responsibility |
|--------|---------------|
| Catalog Management | Governance of book metadata |
| Lending Management | Loans and returns |
| User Management | Administration of identity, roles, and access control. |
| Reporting | Generation of analytical insights and immutable historical data. |

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
