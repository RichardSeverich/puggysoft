const validateTemplateNew = {
  product: false,
  groupProduct: false,
  client: false,
};

const controlValidation = (option, setValidate) => {
  const optionValidate = {
    product: () => {
      setValidate({...validateTemplateNew, product: true})
    },
    groupProduct: () => {
      setValidate({...validateTemplateNew, groupProduct: true})
    },
    client: () => {
      setValidate({...validateTemplateNew, client: true})
    },
    clientProduct: () => {
      setValidate({...validateTemplateNew, product: true, client: true})
    },
    clientGroupProduct: () => {
      setValidate({...validateTemplateNew, groupProduct: true, client: true})
    },
  }
  optionValidate[option]();
};

const handleValidation = (templateToValidate) => {
  if (templateToValidate.product || templateToValidate.groupProduct || templateToValidate.client) return false
  return true;
};

export { controlValidation, validateTemplateNew, handleValidation };
