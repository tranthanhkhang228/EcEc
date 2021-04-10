import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Color, Typography} from 'styles';

const Input = ({
  label,
  text,
  icon,
  onChangeText,
  placeholder,
  maxText,
  disable,
  multiline,
  numberOfLines,
}) => {
  const [isEditting, setIsEditting] = useState(false);
  const inputRef = useRef(null);

  const onPress = () => {
    setIsEditting(true);
    inputRef.current.focus();
  };

  const onBlur = () => {
    setIsEditting(false);
  };

  const onFocus = () => {
    setIsEditting(true);
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          {icon ? <View style={styles.labelIcon}>{icon}</View> : null}
          <Text style={disable ? styles.labelEditting : styles.label}>
            {label}
          </Text>
        </View>
        <TextInput
          ref={inputRef}
          value={text}
          onChangeText={onChangeText}
          placeholder={placeholder}
          editable={disable}
          maxLength={maxText}
          style={
            disable
              ? isEditting
                ? {...styles.inputEditting, ...styles.isEditting}
                : styles.inputEditting
              : styles.input
          }
          onBlur={onBlur}
          onFocus={onFocus}
          multiline={multiline}
          numberOfLines={numberOfLines}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    marginBottom: 10,
    paddingRight: 20,
  },

  labelContainer: {
    flexDirection: 'row',
  },

  labelIcon: {
    marginRight: 7,
    justifyContent: 'center',
  },

  label: {
    fontFamily: Typography.light,
    fontSize: 12,
    color: Color.orange,
  },

  labelEditting: {
    fontFamily: Typography.light,
    fontSize: 12,
    color: Color.gray,
  },

  input: {
    color: Color.gray,

    fontSize: 15,
    fontFamily: Typography.regular,
    lineHeight: 18,
  },

  inputEditting: {
    color: Color.orange,

    fontSize: 15,
    fontFamily: Typography.regular,
    lineHeight: 18,
  },

  isEditting: {
    borderBottomWidth: 0.3,
    borderBottomColor: 'rgba(0,0,0,0.3)',
  },
});
