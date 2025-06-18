const validateTemplateNew = {
  materia: true,
  curso: true,
};

const handleValidation = (templateToValidate) => {
  if (templateToValidate.materia || templateToValidate.curso) return false
  return true;
};

export { validateTemplateNew, handleValidation };
