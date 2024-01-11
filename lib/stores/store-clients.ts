import { create } from "zustand";
import { v4 as uuid } from "uuid";
import { persist } from "zustand/middleware";
import { Column } from "@/components/kanban/board-column";
import { UniqueIdentifier } from "@dnd-kit/core";
import { users } from "@/constants/users";
import { time } from "console";
import { TIMEOUT } from "dns";

export type Status = "TODO" | "IN_PROGRESS" | "DONE";

const defaultCols = [
  {
    id: "TODO" as const,
    title: "Not contacted",
  },
  {
    id: "IN_PROGRESS" as const,
    title: "Contacted",
  },
  {
    id: "DONE" as const,
    title: "Done",
  },
] satisfies Column[];

export type ColumnId = (typeof defaultCols)[number]["id"];

export type Client = {
  id: string;
  name: string;
  description?: string;
  status?: Status;
  city?: string;
  website?: string;
  rating?: number;
  phone?: string;
  email?: string;
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
  getClient: (value: string) => Promise<void>;
};

const initialClients: Client[] = [
  {
    id: "Taller Roberto",
    description: "Cambio de aceite y filtro de aceite",
    status: "TODO",
    name: "Taller Roberto title",
    city: "Santo Domingo",
    website: "https://www.google.com",
    rating: 4,
    phone: "809-555-5555",
    email: "",
  },
];

export const useClientStore = create<State & Actions>()(
  persist(
    (set) => ({
      clients: initialClients,
      columns: defaultCols,
      draggedClient: null,
      addClient: (title: string, description?: string) =>
        set((state) => ({
          clients: [
            ...state.clients,
            {
              id: uuid(),
              name: title,
              description,
              status: "TODO",
              city: "",
              website: "",
              rating: 0,
              phone: "",
              email: "",
            },
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
      getClient: async (value: string) => {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        set({
          clients: users.map((user) => ({
            ...user,
            id: user.id.toString(),
            status: "TODO" as const,
          })),
        });
        // set promise resolver
      },
    }),

    { name: "client-store", skipHydration: true },
  ),
);
