import constate from "constate";
import React, { PropsWithChildren, useState } from 'react'

export type GlobalStateType = {
    blogData: {
        data: {
            readingProgress: number | null
            pageHeight: number
        }
        methods: {
            setReadingProgress: (arg: number) => void
            setPageHeight: (arg: number) => void
        }
    }
    servicesData: {
        data: {
            sectionReadingProgress: number | null
            sectionHeight: number
        }
        methods: {
            setSectionReadingProgress: (arg: number) => void
            setSectionHeight: (arg: number) => void
        }
    }
}

export const globalState: GlobalStateType = {
    blogData: {
        data: {
            readingProgress: 0,
            pageHeight: 0,
        },
        methods: {
            setReadingProgress: () => {},
            setPageHeight: () => {},
        },
    },
    servicesData: {
        data: {
            sectionReadingProgress: 0,
            sectionHeight: 0,
        },
        methods: {
            setSectionReadingProgress: () => {},
            setSectionHeight: () => {},
        },
    },
}
export const [BlogProvider, useBlogProvider] = constate(() => {
    const [state, setState] = useState<GlobalStateType>(globalState);
    const setReadingProgress = (val: number | null) => {
        setState(s => {
            return {
                ...s,
                blogData: {
                    ...s.blogData,
                    data: {
                        ...s.blogData.data,
                        readingProgress: val,
                    },
                },
                servicesData: {
                    ...s.servicesData,
                    services: {
                        ...s.servicesData.data,
                        readingProgress: val,
                    },
                },
            }
        })
    }
    const setSectionReadingProgress = (val: number | null) => {
        setState(s => {
            return {
                ...s,
                servicesData: {
                    ...s.servicesData,
                    services: {
                        ...s.servicesData.data,
                        sectionReadingProgress: val,
                    },
                },
            }
        })
    }

    const setPageHeight = (val: number) => {
        setState(s => {
            return {
                ...s,
                blogData: {
                    ...s.blogData,
                    data: {
                        ...s.blogData.data,
                        pageHeight: val,
                    },
                },
            }
        })
    }
    const setSectionHeight = (val: number) => {
        setState(s => {
            return {
                ...s,
                servicesData: {
                    ...s.servicesData,
                    data: {
                        ...s.servicesData.data,
                        sectionHeight: val,
                    },
                },
            }
        })
    }
    const blogData = {
        data: state.blogData.data,
        methods: {
            setReadingProgress,
            setPageHeight,
        },
    }
    const servicesData = {
        data: state.servicesData.data,
        methods: {
            setSectionReadingProgress,
            setSectionHeight,
        },
    }
    return {
        blogData: blogData,
        servicesData: servicesData,
    };
  });
  