import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { githubActions } from "../store/github/github.slice"

// action - თან რომ ვიმუშაოთ


const actions = {
    ...githubActions
}

export const useActions = () => {
    const dispatch = useDispatch()

    // ვიღებთ ექშენებს და ვბინდავთ დისპატჩში
    return bindActionCreators(actions, dispatch)
}