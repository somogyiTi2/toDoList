export interface TodoListType {
    key: string;
    title: string;
    description: string;
}

export interface TodoFormProps {
    addElement: (newElement: TodoListType) => void;
  }