export const useScreenSize = () => {
    const screenWidth = ref(window?.innerWidth);

    const updateScreenWidth = ():void => {
        screenWidth.value = window.innerWidth;
    };

    onMounted(() => {
        updateScreenWidth();
        window.addEventListener('resize', updateScreenWidth);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('resize', updateScreenWidth);
    });

    return useState('screenWidth', () => screenWidth)
}
