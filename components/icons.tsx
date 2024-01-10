import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  CircuitBoardIcon,
  Command,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  LayoutDashboardIcon,
  Loader2,
  LogIn,
  LucideIcon,
  LucideProps,
  MessageCircle,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Table,
  Trash,
  Twitter,
  User,
  User2Icon,
  UserX2Icon,
  X,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  dashboard: LayoutDashboardIcon,
  table: Table,
  login: LogIn,
  close: X,
  profile: User2Icon,
  spinner: Loader2,
  kanban: CircuitBoardIcon,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  employee: UserX2Icon,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  messageCircle: MessageCircle,
  laptop: Laptop,
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  google: ({ ...props }: LucideProps) => (
    <svg
      viewBox="0 0 24 24"
      stroke="#000000"
      fill="none"
      data-icon="google"
      strokeLinejoin="round"
      strokeLinecap="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 6.5625C12.9876 6.5625 13.8984 6.8157 14.686 7.31283C15.145 7.60249 15.7599 7.60632 16.1437 7.22257L17.2894 6.07686C17.6899 5.67632 17.6811 5.01805 17.225 4.68219C15.7907 3.6261 14.0321 3 12 3C8.4825 3 5.44125 5.0175 3.96 7.9575L6.9525 10.2787C7.66125 8.145 9.6525 6.5625 12 6.5625Z"></path>
      <path d="M20.6175 12.2063C20.6175 11.9155 20.6038 11.6293 20.5795 11.3482C20.5372 10.8578 20.1124 10.5 19.6202 10.5H13C12.4477 10.5 12 10.9477 12 11.5V12.8825C12 13.4348 12.4477 13.8825 13 13.8825H16.8525C16.635 14.9925 16.005 15.9375 15.06 16.575L17.9587 18.825C19.65 17.2575 20.6175 14.94 20.6175 12.2063Z"></path>
      <path d="M6.94875 13.7212C6.76875 13.1775 6.66375 12.6 6.66375 12C6.66375 11.4 6.765 10.8225 6.94875 10.2787L3.95625 7.95749C3.345 9.17249 3 10.545 3 12C3 13.455 3.345 14.8275 3.96 16.0425L6.94875 13.7212Z"></path>
      <path d="M12 21C14.43 21 16.4737 20.2012 17.9587 18.8212L15.06 16.5712C14.2537 17.115 13.215 17.4337 12 17.4337C9.6525 17.4337 7.66125 15.8512 6.94875 13.7175L3.95625 16.0387C5.44125 18.9825 8.4825 21 12 21Z"></path>
    </svg>
  ),
  addUser: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
      <path d="M16 19h6" />
      <path d="M19 16v6" />
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
    </svg>
  ),

  search: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={18}
      role="presentation"
      viewBox="0 0 24 24"
      width={18}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className="stroke-default-400"
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="stroke-default-400"
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  logo: ({ ...props }: LucideProps) => (
    <svg
      id="Capa_2"
      className="fill-cyan-500"
      data-name="Capa 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 725.65 152.06"
      {...props}
    >
      <path
        className="cls-1"
        d="M63.86,125.78c-21.81,0-32.9-13.24-32.9-39.33s11.29-38.75,32.51-38.75c16.94,0,26.09,7.59,28.82,23.56h31.15c-3.31-32.52-23.75-49.65-59.38-49.65C23.56,21.61,0,45.36,0,86.64s22.98,65.42,64.06,65.42c36.41,0,56.85-17.72,59.58-51.6h-30.96c-2.34,17.13-11.49,25.31-28.82,25.31Z"
      />
      <rect
        className="cls-1"
        x="141.93"
        y="7.98"
        width="28.82"
        height="142.13"
      />
      <path
        className="cls-1"
        d="M208.9,0c-10.12,0-16.74,6.04-16.74,15.38s6.62,15.38,16.74,15.38,17.33-6.23,17.33-15.38-6.81-15.38-17.33-15.38Z"
      />
      <rect
        className="cls-1"
        x="194.89"
        y="43.03"
        width="28.82"
        height="107.09"
      />
      <path
        className="cls-1"
        d="M295.93,41.08c-34.66,0-54.13,19.66-54.13,55.3s19.66,55.69,55.3,55.69c27.84,0,44.78-12.46,49.65-36.41h-28.04c-2.73,8.37-9.74,12.85-21.22,12.85-15.77,0-24.34-8.18-26.09-24.73h76.13c.39-4.09.78-9.74.58-16.55-1.17-29.2-19.86-46.14-52.18-46.14ZM271.79,86.45c2.34-14.6,10.71-22,24.53-22,14.8,0,23.75,8.37,24.34,22h-48.87Z"
      />
      <path
        className="cls-1"
        d="M427.93,41.08c-15.58,0-26.09,5.45-34.85,14.99l-4.48-13.05h-22.78v107.09h28.82v-70.48c6.43-8.76,14.6-13.63,23.17-13.63,13.83,0,20.83,7.79,20.83,23.17v60.94h28.82v-67.76c0-24.34-15.77-41.28-39.53-41.28Z"
      />
      <path
        className="cls-1"
        d="M526.64,109.42v-45.56h29.4v-20.83h-29.4V12.85l-28.82,6.23v23.95h-18.69v20.83h18.69v52.76c0,23.36,13.44,35.43,39.53,35.43,6.04,0,16.35-.78,19.47-1.36v-24.92c-3.5.39-8.37.78-13.63.78-11.49,0-16.55-5.06-16.55-17.13Z"
      />
      <rect
        className="cls-1"
        x="572.2"
        y="43.03"
        width="28.82"
        height="107.09"
      />
      <path
        className="cls-1"
        d="M586.22,0c-10.12,0-16.75,6.04-16.75,15.38s6.62,15.38,16.75,15.38,17.33-6.23,17.33-15.38-6.82-15.38-17.33-15.38Z"
      />
      <path
        className="cls-1"
        d="M662.08,63.24c-3.22,5.19-7.02,9.98-11.31,14.27-2.2,2.2-4.54,4.28-7,6.21-7.01,5.53-14.99,9.9-23.67,12.82,8.83,2.98,16.94,7.45,24.04,13.11,6.93,5.52,12.9,12.18,17.64,19.71,3.3,5.23,6,10.89,8.02,16.87,1.95-5.78,4.55-11.26,7.7-16.35,3.22-5.2,7.03-10,11.33-14.31,2.2-2.2,4.54-4.29,7-6.22,7.01-5.53,14.99-9.9,23.67-12.82-8.83-2.97-16.93-7.45-24.03-13.11-2.33-1.85-4.54-3.83-6.64-5.93-4.2-4.2-7.92-8.87-11.1-13.93-3.26-5.2-5.93-10.81-7.94-16.73-1.96,5.8-4.56,11.29-7.72,16.39Z"
      />
      <path
        className="cls-1"
        d="M614.53,150.06h32.11l13.73-18.79c-4.67-7.57-10.63-14.29-17.55-19.84l-28.29,38.62ZM679.13,61.66c4.68,7.63,10.68,14.4,17.65,19.98l28.29-38.62h-32.3l-13.63,18.64ZM678.9,131.79l13.47,18.27h33.28l-28.52-38.91c-7.24,5.73-13.44,12.73-18.24,20.64ZM642.46,81.93c7.23-5.72,13.42-12.72,18.22-20.62l-13.26-18.29h-33.47l28.51,38.9Z"
      />
    </svg>
  ),
  twitter: Twitter,
  check: Check,
};
