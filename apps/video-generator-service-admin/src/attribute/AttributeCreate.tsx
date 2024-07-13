import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AttributeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="organizationId" source="organizationId" />
      </SimpleForm>
    </Create>
  );
};
