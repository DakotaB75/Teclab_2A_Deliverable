![Status](https://img.shields.io/badge/status-academic%20prototype-blue)
![Architecture](https://img.shields.io/badge/architecture-component--based-blue)
![Systems Analysis](https://img.shields.io/badge/systems%20analysis-driven-blue)
![Documentation](https://img.shields.io/badge/documentation-engineering%20grade-blue)

![Maintained](https://img.shields.io/badge/maintained-yes-success)
![Senior Level of Managers](https://img.shields.io/badge/Senior%20Level-success)
![License](https://img.shields.io/badge/license-MIT-success)
![Version](https://img.shields.io/badge/version-v1.0.0-green)
![Teclab](https://img.shields.io/badge/Teclab%20Advanced%20Expert-blue)

<p align="center">
  <img src="public/Portada_Readme.png" alt="Project Cover" width="900"/>
</p>

# Teclab Library Information System

## Academic Team

Project developed with academic and technical guidance from:

- **Martin Bonino** — Mentor
- **Aquiles Gonzalez** — Expert Tutor
- **Caterina Murray** — Teclab Tutor
- **Miguel Bellido** — Teclab Tutor IT

---

## Overview

This repository contains the development prototype of the **Teclab Library Information System**, a web-based platform designed to modernize and automate the operational workflow of an academic library.

The project originates from a real systems analysis exercise focused on identifying organizational inefficiencies and translating business needs into a structured software solution.

Instead of building software first and defining problems later, this project follows a **systems engineering approach**:

> understand → analyze → design → implement → iterate

The result is a functional frontend prototype representing the future digital transformation of the Teclab library services.

---

## The Story Behind the Project

Many small and medium educational institutions still rely on spreadsheets to manage critical operations.  
The Teclab library was no exception.

Inventory tracking and book loans were handled manually using Excel files, which introduced operational friction:

- duplicated records
- inconsistent data updates
- lack of inventory visibility
- slow loan processes
- no historical traceability

As the collection grew beyond **2500 books**, the process became increasingly fragile.

This project was created to answer a simple engineering question:

> What happens when organizational analysis drives software design instead of the other way around?

---

## Project Goals

The system aims to:

- Centralize bibliographic information
- Automate loan and return workflows
- Provide real-time inventory visibility
- Reduce manual errors
- Improve operational efficiency
- Enable data-driven decision making

---

## Systems Analysis Methodology

The solution design was based on classical **Information Systems Analysis** techniques.

### 1. Direct Observation
Analysis of real operational workflows:
- manual loan registration
- spreadsheet usage patterns
- staff interaction processes
- service bottlenecks

### 2. Interviews
Stakeholder interviews were conducted to identify:
- functional requirements
- operational pain points
- expectations for the new system

### 3. Surveys
Students and faculty users provided feedback regarding:
- usage frequency
- borrowing difficulties
- availability search needs
- overall service satisfaction

---

## Problems Identified

The analysis revealed structural issues:

- Data duplication across files
- Absence of automated inventory control
- Operational delays
- Lack of historical tracking
- High probability of human error
- No real-time information access

These findings defined the system requirements.

---

## System Requirements

### Functional Requirements

The platform is designed to support:

- User authentication
- Role-based access control
- Book management (CRUD operations)
- Author and publisher management
- Loan and return registration
- Reservation handling
- Fine management
- Inventory consultation
- Reporting generation
- Full traceability of book movements

### Non-Functional Requirements

- Web-based accessibility
- Simple and intuitive interface
- Real-time data availability
- Data integrity and security
- Continuous service availability

---

## Information System Model

The system follows a classic information processing model.

### Input
- User data
- Book metadata
- Loan and return transactions

### Processing
- Data validation
- Automatic inventory updates
- Movement logging
- Fine calculation

### Output
- Operational reports
- Availability queries
- Historical tracking
- Updated inventory information

### Feedback
Generated information enables continuous process improvement.

---

## Technical Stack

This prototype focuses on frontend architecture and interaction design.

- **React**
- **Vite**
- **TypeScript**
- **Tailwind CSS**
- Component-based architecture
- Static deployment via GitHub Pages

The interface was initially designed in Figma and later translated into reusable UI components.

---

## Live Demo

Application available at:

https://DakotaB75.github.io/Teclab_2A_Deliverable/

---

## Project Structure
```text
src/
│
├── components/
│ ├── layout/
│ ├── sections/
│ └── ui/
│
├── styles/
├── assets/
└── main.tsx
```

The structure follows separation of concerns and reusable component patterns common in modern frontend architectures.

---

## Engineering Approach

This project intentionally prioritizes:

- problem understanding before coding
- system thinking over feature accumulation
- clarity of architecture
- incremental evolution

The goal is not only to build an interface, but to demonstrate how **organizational analysis translates into software design decisions**.

---

## Future Roadmap

Planned evolution includes:

- REST API integration
- relational database persistence
- authentication and authorization
- reporting engine

