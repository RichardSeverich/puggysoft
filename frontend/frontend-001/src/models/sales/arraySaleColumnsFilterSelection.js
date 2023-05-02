import enumFilterType from "../enumFilterType";
import enumCompareOperators from "./../enumCompareOperators";
import enumSaleStatus from "./enumSaleStatus";

import i18n from "../../i18n/i18n";

const getColumnsFilterModel = function (
  /* TENANT */ criteriaTenant, operatorTenant,
  /* ID */ criteriaId, criteriaOnChangeId, criteriaSetId, operatorId, operatorOnChangeId, operatorSetId,
  /* CLIENT */ criteriaClient, criteriaOnChangeClient, criteriaSetClient, operatorClient, operatorOnChangeClient, operatorSetClient,
  /* STATUS */ criteriaStatus, criteriaOnChangeStatus, criteriaSetStatus, operatorStatus, operatorOnChangeStatus, operatorSetStatus,
  /* CREATED BY */criteriaCreatedBy, criteriaOnChangeCreatedBy, criteriaSetCreatedBy, operatorCreatedBy, operatorOnChangeCreatedBy, operatorSetCreatedBy,
  /* UPDATED BY */criteriaUpdatedBy, criteriaOnChangeUpdatedBy, criteriaSetUpdatedBy, operatorUpdatedBy, operatorOnChangeUpdatedBy, operatorSetUpdatedBy,
  /* CREATED DATE */criteriaCreatedDate, criteriaOnChangeCreatedDate, criteriaSetCreatedDate, operatorCreatedDate, operatorOnChangeCreatedDate, operatorSetCreatedDate,
  /* UPDATED DATE */criteriaUpdatedDate, criteriaOnChangeUpdatedDate, criteriaSetUpdatedDate, operatorUpdatedDate, operatorOnChangeUpdatedDate, operatorSetUpdatedDate,
  criteriaStatusDefault
) {
  let filterObjectSaleStatus = {
    type: enumFilterType.DROPDOWN,
    criteriaValue: criteriaStatus,
    criteriaOnchange: criteriaOnChangeStatus,
    operatorValue: operatorStatus,
    operatorOnchange: operatorOnChangeStatus,
    dropdownValues: [
      { value: "", text: i18n.saleStatus.all },
      { value: enumSaleStatus.TODO, text: i18n.saleStatus.todo },
      { value: enumSaleStatus.IN_PROGRESS, text: i18n.saleStatus.inProgress },
      { value: enumSaleStatus.DONE, text: i18n.saleStatus.done }
    ]
  };

  if (criteriaStatusDefault === enumSaleStatus.TODO) {
    filterObjectSaleStatus = {
      type: enumFilterType.NONE
    };
  } else if (criteriaStatusDefault === enumSaleStatus.IN_PROGRESS) {
    filterObjectSaleStatus = {
      type: enumFilterType.NONE
    };
  }

  const arrayColumnsFilter = [
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaId,
      criteriaOnchange: criteriaOnChangeId,
      operatorValue: operatorId,
      operatorOnchange: operatorOnChangeId
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaClient,
      criteriaOnchange: criteriaOnChangeClient,
      operatorValue: operatorClient,
      operatorOnchange: operatorOnChangeClient
    },
    filterObjectSaleStatus,
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaCreatedBy,
      criteriaOnchange: criteriaOnChangeCreatedBy,
      operatorValue: operatorCreatedBy,
      operatorOnchange: operatorOnChangeCreatedBy
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaUpdatedBy,
      criteriaOnchange: criteriaOnChangeUpdatedBy,
      operatorValue: operatorUpdatedBy,
      operatorOnchange: operatorOnChangeUpdatedBy
    },
    {
      type: enumFilterType.DATE,
      criteriaValue: criteriaCreatedDate,
      criteriaOnchange: criteriaOnChangeCreatedDate,
      operatorValue: operatorCreatedDate,
      operatorOnchange: operatorOnChangeCreatedDate
    },
    {
      type: enumFilterType.DATE,
      criteriaValue: criteriaUpdatedDate,
      criteriaOnchange: criteriaOnChangeUpdatedDate,
      operatorValue: operatorUpdatedDate,
      operatorOnchange: operatorOnChangeUpdatedDate
    }
  ];

  const setOperatorsDefaultValues = function () {
    operatorSetId(enumCompareOperators.TEXT_CONTAINS);
    operatorSetClient(enumCompareOperators.TEXT_CONTAINS);
    operatorSetStatus(enumCompareOperators.TEXT_EQUALS);
    operatorSetCreatedBy(enumCompareOperators.TEXT_CONTAINS);
    operatorSetUpdatedBy(enumCompareOperators.TEXT_CONTAINS);
    operatorSetCreatedDate(enumCompareOperators.DATE_EQUALS);
    operatorSetUpdatedDate(enumCompareOperators.DATE_EQUALS);
  };

  const clearFilters = function () {
    criteriaSetId("");
    criteriaSetClient("");
    criteriaSetStatus(criteriaStatusDefault); // Empty means all
    criteriaSetCreatedBy("");
    criteriaSetUpdatedBy("");
    criteriaSetCreatedDate("");
    criteriaSetUpdatedDate("");
    setOperatorsDefaultValues();
  };

  const getFilterBody = () => {
    const filterBody = {
      idCriteria: criteriaId,
      idOperator: operatorId,
      clientCriteria: criteriaClient,
      clientOperator: operatorClient,
      statusCriteria: criteriaStatus,
      statusOperator: operatorStatus,
      tenantCriteria: criteriaTenant,
      tenantOperator: operatorTenant,
      createdByCriteria: criteriaCreatedBy,
      createdByOperator: operatorCreatedBy,
      updatedByCriteria: criteriaUpdatedBy,
      updatedByOperator: operatorUpdatedBy,
      creationDateCriteria: criteriaCreatedDate,
      creationDateOperator: operatorCreatedDate,
      updateDateCriteria: criteriaUpdatedDate,
      updateDateOperator: operatorUpdatedDate
    };
    return filterBody;
  };

  return {
    arrayColumnsFilter,
    clearFilters,
    getFilterBody,
    setOperatorsDefaultValues
  };
};

export default getColumnsFilterModel;
