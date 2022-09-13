export const usList = () =>
    import(
        '../pages/user-list/modules/user-list.module'
    ).then((m) => m.UserListModule);

export const usInfo = () =>
    import(
        '../pages/user-info/modules/user-info.module'
    ).then((m) => m.UserInfoModule);
