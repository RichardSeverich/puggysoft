const validateTemplateNew = {
  materia: true,
  curso: true,
  nota: false,
};

const handleValidation = (templateToValidate) => {
  if (templateToValidate.materia || templateToValidate.curso|| templateToValidate.nota) return false
  return true;
};

export { validateTemplateNew, handleValidation };
