<template>
  <div>
    <JsonToCSV
        :data="jsonData"
        :fields="fields"
        :name="dataFile"
        :labels="labels"
        @export-started="exportStarted"
        @export-finished="exportFinished"
    />
    <div v-if="isExported">Exported successfully!</div>
    <pre>{{ readableJson }}</pre>
  </div>
</template>

<script lang="ts" setup>
import {computed, ref} from 'vue';
import JsonToCSV from './JsonToCSV.vue';

const jsonData = ref([
  {'id': 1, 'fname': 'Jesse', 'lname': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male'},
  {'id': 2, 'fname': 'John', 'lname': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male'},
  {'id': 3, 'fname': 'Tina', 'lname': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female'},
  {'id': 4, 'fname': 'Clarence', 'lname': 'Flores', 'date': '2016-04-10 10:28:46', 'gender': 'Male'},
  {'id': 5, 'fname': 'Anne', 'lname': 'Lee', 'date': '2016-12-06 14:38:38', 'gender': 'Female'},
  {'id': 6, 'fname': '佟博', 'lname': '能娜', 'date': '2016-12-06 14:38:38', 'gender': 'Male'},
  {'id': 7, 'fname': 'Širůčková', 'lname': 'Tereza', 'date': '2019-12-06 14:38:38', 'gender': 'Female'},
]);

const readableJson = computed(() => JSON.stringify(jsonData.value, null, 2));

const dataFile = 'my_export.csv';

const labels = ref({
  fname: 'First Name',
  lname: 'Last Name',
});

const fields = ref(['id', 'fname', 'lname', 'date']);

const isExported = ref(false);

const exportStarted = (event) => {
  console.log(event);
  isExported.value = true;
};

const exportFinished = () => {
  setTimeout(() => {
    isExported.value = false;
  }, 3 * 1000);
};
</script>
