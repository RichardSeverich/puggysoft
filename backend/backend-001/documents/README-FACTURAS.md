# java-spring-puggysoft

## FACTURAS

###  GET
```
GET localhost:8080/api/v1/fac-bills/{id}"
{
    "numberAuthorization" :"",
    "billNumber": "",
    "nitClient": "",
    "datePurchased": "",
    "dosageKey": "",
    "controlCode": "",
    "purchaseAmount": "",
    "tenant":""
}
```
##  POST CREATE
```
POST localhost:8080/api/v1/fac-bills
{
    "numberAuthorization" :"11we334",
    "billNumber" :"7554w42",
    "nitClient" :"33422et6",
    "datePurchased" :"44832264",
    "dosageKey" :"76te5",
    "controlCode" :"987gbyc",
    "purchaseAmount" :"1wqwt32",
    "tenant" :"Vert_1"
}
```  

##  POST FILTER
```
POST localhost:8080/api/v1/fac-bills/filter?page=0&size=10
POST localhost:8080/api/v1/fac-bill/filter/size/{pageSize}
{
    "numberAuthorizationCriteria": "8",
    "numberAuthorizationOperator": "TEXT_END_WITH",
    "billNumberCriteria":"6",
    "billNumberOperator":"TEXT_EQUALS",
    "nitClientCriteria": "5",
    "nitClientOperator": "TEXT_START_WITH",
    "datePurchasedCriteria":"9",
    "datePurchasedOperator":"TEXT_END_WITH",
    "dosageKeyCriteria": "76",
    "dosageKeyOperator": "TEXT_END_WITH",
    "controlCodeCriteria": "34",
    "controlCodeOperator": "TEXT_EQUALS",
    "tenantCriteria": "34",
    "tenantOperator": "TEXT_CONTAINS"
}
```  

## PUT
 ```
PUT localhost:8080/api/v1/fac-bills/{id}
{
    "numberAuthorization" :"11we334",
    "billNumber" :"7554w42",
    "nitClient" :"33422et6",
    "datePurchased" :"44832264",
    "dosageKey" :"76te5",
    "controlCode" :"987gbyc",
    "purchaseAmount" :"1wqwt32",
    "tenant" :"Vert_1"
}
 ```

## DELETE
```
localhost:8080/api/v1/fac-bills/1005
```
