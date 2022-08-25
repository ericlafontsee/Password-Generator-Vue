<template>
    <form @submit.prevent="">
      <div class="form-control">
        <label for="passwordLength">How long do you want your password to be?</label>
        <input id="passwordLength" name="passwordLength" type="text" ref="passwordLengthInput" />
      </div>
        <button type="submit">Generate Password</button>
    </form>
</template>