import React, { FunctionComponent, FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Input, Button, Form } from "./styles";

interface Props {
  defaultValue?: string;
  name: string;
  onSubmit: (e: string) => void;
  placeholder: string;
}

const Search: FunctionComponent<Props> = ({
  defaultValue = "",
  name,
  onSubmit,
  placeholder,
}: Props) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit((e.currentTarget.elements[name as any] as HTMLInputElement).value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
      <Button type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </Button>
    </Form>
  );
};

export default Search;
