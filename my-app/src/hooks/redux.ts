import { RootState } from './../store/store';
import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from 'react-redux';


// საშუალებას გვაძლევს story დან წამოვიღოთ მონაცემები
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector