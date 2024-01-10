import { create } from "zustand";
import { v4 as uuid } from "uuid";
import { persist } from "zustand/middleware";
import { Column } from "@/components/kanban/board-column";
import { UniqueIdentifier } from "@dnd-kit/core";

export type Status = "TODO" | "IN_PROGRESS" | "DONE";

const defaultCols = [
  {
    id: "TODO" as const,
    title: "Todo",
  },
] satisfies Column[];

export type ColumnId = (typeof defaultCols)[number]["id"];

export type Client = {
  id: string;
  title: string;
  description?: string;
  status: Status;
};

export type State = {
  clients: Client[];
  columns: Column[];
  draggedClient: string | null;
};

export type Actions = {
  addClient: (title: string, description?: string) => void;
  addCol: (title: string) => void;
  dragClient: (id: string | null) => void;
  removeClient: (title: string) => void;
  removeCol: (id: UniqueIdentifier) => void;
  setClient: (updatedClients: Client[]) => void;
  setCols: (cols: Column[]) => void;
  updateCol: (id: UniqueIdentifier, newName: string) => void;
};

const initialClients: Client[] = [
  {
    id: "Taller Roberto",
    description: "Cambio de aceite y filtro de aceite",
    status: "TODO",
    title: "Taller Roberto title",
  },
];

export const useClientsStore = create<State & Actions>()(
  persist(
    (set) => ({
      clients: initialClients,
      columns: defaultCols,
      draggedClient: null,
      addClient: (title: string, description?: string) =>
        set((state) => ({
          clients: [
            ...state.clients,
            { id: uuid(), title, description, status: "TODO" },
          ],
        })),
      updateCol: (id: UniqueIdentifier, newName: string) =>
        set((state) => ({
          columns: state.columns.map((col) =>
            col.id === id ? { ...col, title: newName } : col,
          ),
        })),
      addCol: (title: string) =>
        set((state) => ({
          columns: [...state.columns, { id: uuid(), title }],
        })),
      dragClient: (id: string | null) => set({ draggedClient: id }),
      removeClient: (id: string) =>
        set((state) => ({
          clients: state.clients.filter((client) => client.id !== id),
        })),
      removeCol: (id: UniqueIdentifier) =>
        set((state) => ({
          columns: state.columns.filter((col) => col.id !== id),
        })),
      setClient: (newClients: Client[]) => set({ clients: newClients }),
      setCols: (newCols: Column[]) => set({ columns: newCols }),
    }),
    { name: "client-store", skipHydration: true },
  ),
);
