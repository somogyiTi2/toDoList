export interface TodoListType {
    key: number;
    title: string;
    description: string;
}

export interface TodoFormProps {
    addElement: (newElement: TodoListType) => void;
  }