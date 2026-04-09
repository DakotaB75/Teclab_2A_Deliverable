# Engineering Principles

## Problem First, Technology Second
**Description**  
El desarrollo debe comenzar entendiendo el problema antes de elegir herramientas o tecnologías. La solución debe responder a necesidades reales y no a preferencias técnicas.

**Rationale**  
Elegir tecnología sin comprender el problema puede generar soluciones innecesariamente complejas o ineficientes. En ingeniería de software, el foco debe estar en el valor que se entrega.

**Application in This Project**  
Las decisiones técnicas se toman en función de los requerimientos del sistema, priorizando funcionalidad y claridad sobre tendencias tecnológicas.

**Contributor Guidance**  
Antes de implementar, validar que el cambio resuelve un problema concreto. Evitar introducir tecnologías o librerías sin justificación clara.

---

## Simplicity Over Cleverness
**Description**  
Se prioriza código simple, claro y mantenible por sobre soluciones complejas o ingeniosas.

**Rationale**  
El código complejo es más difícil de entender, mantener y depurar. La simplicidad reduce errores y mejora la colaboración.

**Application in This Project**  
Se utilizan estructuras claras, nombres descriptivos y lógica directa en lugar de optimizaciones innecesarias.

**Contributor Guidance**  
Escribir código que otro desarrollador pueda entender fácilmente. Evitar soluciones “inteligentes” que dificulten la lectura.

---

## Explicit Architecture
**Description**  
La arquitectura del sistema debe ser clara, visible y comprensible para todos los colaboradores.

**Rationale**  
Una arquitectura explícita facilita la escalabilidad, el mantenimiento y la incorporación de nuevos desarrolladores.

**Application in This Project**  
La estructura del sistema está organizada en componentes definidos, separando responsabilidades como lógica, datos y presentación.

**Contributor Guidance**  
Respetar la arquitectura existente. No introducir cambios estructurales sin documentarlos.

---

## Incremental Evolution
**Description**  
El sistema debe evolucionar mediante cambios pequeños, controlados y progresivos.

**Rationale**  
Los cambios grandes aumentan el riesgo de errores y dificultan la detección de problemas.

**Application in This Project**  
Las mejoras se implementan en pasos pequeños, permitiendo validar cada cambio antes de continuar.

**Contributor Guidance**  
Realizar cambios acotados y verificables. Evitar modificaciones masivas sin justificación.

---

## Separation of Concerns
**Description**  
Cada parte del sistema debe tener una responsabilidad clara y separada.

**Rationale**  
Reduce el acoplamiento y facilita el mantenimiento, testing y escalabilidad.

**Application in This Project**  
La lógica de negocio, el acceso a datos y la interfaz se mantienen separados.

**Contributor Guidance**  
No mezclar responsabilidades en un mismo componente. Mantener la estructura modular.

---

## Documentation as Engineering Artifact
**Description**  
La documentación es parte esencial del sistema y debe mantenerse actualizada.

**Rationale**  
Permite entender decisiones, arquitectura y funcionamiento sin depender del conocimiento implícito.

**Application in This Project**  
Se documentan principios, decisiones y cambios relevantes en archivos del repositorio.

**Contributor Guidance**  
Actualizar la documentación junto con cualquier cambio significativo.

---

## Consistency Over Personal Preference
**Description**  
Se prioriza la consistencia del código por sobre preferencias individuales.

**Rationale**  
La consistencia mejora la legibilidad y reduce la fricción entre colaboradores.

**Application in This Project**  
Se siguen convenciones comunes en nombres, estructura y estilo de código.

**Contributor Guidance**  
Adaptarse al estilo existente del proyecto. Evitar imponer estilos personales.

---

# Engineering Governance

Las decisiones técnicas se toman en función de los principios definidos en este documento, priorizando claridad, simplicidad y mantenibilidad. Toda decisión relevante debe quedar documentada para asegurar trazabilidad.

La documentación cumple un rol central como soporte del conocimiento del sistema. No solo describe el funcionamiento, sino también las decisiones arquitectónicas y su justificación.

Dado el contexto académico, se promueve la colaboración estructurada, donde cada contribución debe ser comprensible, justificable y alineada con buenas prácticas.

La estabilidad del sistema es prioritaria. Los cambios deben minimizar el impacto en funcionalidades existentes y respetar la arquitectura definida.

---

# Decision Guidelines

- Prefer clarity over optimization  
- Architectural decisions must be documented  
- Documentation updates accompany structural changes  
- Avoid unnecessary complexity  
- Maintain system stability when introducing changes  

---

# Contribution Alignment

Antes de realizar un cambio, cada colaborador debe verificar que:

- El cambio sigue los principios definidos en este documento  
- Mantiene coherencia con la arquitectura existente  
- No introduce complejidad innecesaria  
- Está correctamente documentado  

Además, todo cambio debe ser entendible, revisable y alineado con los objetivos del proyecto.
