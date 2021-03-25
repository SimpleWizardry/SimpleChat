import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../redux/store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
// ЭТОТ КОМЕНТ ПОМОГ ПОФИКСИТЬ НЕПОНЯТНО ЧТО(УДАЛИТЬ ЧТОБЫ ВОСПРОИЗВЕСТИ)