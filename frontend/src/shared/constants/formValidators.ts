
function handleNotEmpty(value: string) {
    return value ? '' : 'Это поле не должно быть пустым'
}

function handleMinValue(value: string, min: number) {
    return value.length >= min ? '' : `Это поле должно содержать не менее ${min} символов`
}

function handleMaxValue(value: string, max: number) {
    return value.length <= max ? '' : `Это поле должно содержать не более ${max} символов`
}

export const VALIDATORS = {
    notEmpty: handleNotEmpty,
    minValue: handleMinValue,
    maxValue: handleMaxValue
}