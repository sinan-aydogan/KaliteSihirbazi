<template>
    <div class="inline-block min-w-full align-middle">
        <!--Top Panel-->
        <div class="mb-4 inline-flex justify-between items-center min-w-full">
            <label for="table-search" class="sr-only">Search</label>
            <!--Search-->
            <div class="relative mt-1">
                <text-input input-id="table-search">
                    <template #append>
                        <font-awesome-icon icon="search"/>
                    </template>
                </text-input>
            </div>
            <!--Buttons-->
            <div v-if="$slots.buttons" class="relative mt-1">
                <slot name="buttons"></slot>
            </div>
        </div>
        <!--Table-->
        <table class="min-w-full table-fixed dark:divide-gray-700">
            <thead>
            <tr>
                <!--Checkbox for Select-->
                <th v-if="selectable" scope="col" class="first:rounded-l-md last:rounded-r-md p-4">
                    <div class="flex items-center">
                        <input id="checkbox-search-all" type="checkbox"
                               class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-search-all" class="sr-only">checkbox</label>
                    </div>
                </th>
                <!--Headers of the content-->
                <template v-for="header in headers">
                    <th scope="col"
                        class="py-3 px-6 text-xs tracking-wider text-left uppercase first:rounded-l-md last:rounded-r-md"
                        :class="[
                            {'text-left' : header.align === 'left' || header.align === null || header.align === undefined},
                            {'text-center' : header.align === 'center'},
                            {'text-right' : header.align === 'right'},
                        ]"
                    >
                        {{ header.name }}
                    </th>
                </template>
            </tr>
            </thead>
            <tbody class="shadow-lg">
            <!--Rows of the data-->
            <template v-for="row in data">
                <tr class="odd:bg-slate-900/50 hover:bg-slate-50 hover:dark:bg-slate-600/50 border-slate-200 dark:border-slate-600">
                    <!--Checkbox for Select-->
                    <td v-if="selectable" class="p-4 w-4">
                        <div class="flex items-center">
                            <input id="checkbox-search-1" type="checkbox"
                                   class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="checkbox-search-1" class="sr-only">checkbox</label>
                        </div>
                    </td>
                    <!--Fields of the content-->
                    <template v-for="column in headers">
                        <td
                            v-if="headers.find(h=>h.id === column.id)"
                            class="py-4 px-6 text-sm whitespace-nowrap"
                            :class="[
                            {'text-left' : column.align === 'left' || column.align === null || column.align === undefined},
                            {'text-center' : column.align === 'center'},
                            {'text-right' : column.align === 'right'},
                        ]"
                        >
                            <slot v-if="$slots[column.id]" :name="column.id" :props="row"></slot>
                            <span v-else v-text="row[column.id]"></span>
                        </td>
                    </template>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>
import TextInput from "@/Components/Form/TextInput";

export default {
    name: "InnerTable",
    components: {TextInput},
    props: {
        data: {
            type: [Array, Object],
            default: () => {
                return []
            }
        },
        headers: {
            type: [Array, Object],
            default: () => {
                return []
            }
        },
        selectable: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style scoped>
tr:first-child > td:first-child {
    border-top-left-radius: 10px;
}

tr:first-child > td:last-child {
    border-top-right-radius: 10px;
}

tr:last-child > td:first-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 10px;
}

tr:last-child > td:last-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 10px;
}
</style>
