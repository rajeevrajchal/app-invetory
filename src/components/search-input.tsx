"use client";
import { CloseButton, TextInput } from "@mantine/core";
import { CiSearch } from "react-icons/ci";

interface SearchInputProps {
  query: string;
  setQuery: (val: string) => void;
}

const SearchInput = (props: SearchInputProps) => {
  const { query, setQuery } = props;

  return (
    <TextInput
      leftSection={<CiSearch />}
      placeholder="Search"
      rightSection={query ? <CloseButton onClick={() => setQuery("")} /> : ""}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchInput;
